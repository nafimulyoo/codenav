import { useState, useEffect } from "react";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "@/lib/firebase/firebase";

export function useUserCategories() {
  const [user, setUser]: any = useState(null);
  const [activeCategories, setActiveCategories]: any = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        await fetchUserData(currentUser);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchUserData = async (user: any) => {
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();
      setActiveCategories(userData.interests || []);
    }
  };

  const toggleCategory = async (category: string) => {
    if (!user) return;

    let updatedCategories;
    if (activeCategories.includes(category)) {
      updatedCategories = activeCategories.filter((c: any) => c !== category);
    } else {
      updatedCategories = [...activeCategories, category];
    }

    setActiveCategories(updatedCategories);

    const userDocRef = doc(db, "users", user.uid);
    await updateDoc(userDocRef, {
      interests: updatedCategories,
    });
  };

  const updateCategories = async (updatedCategories: string[]) => {
    if (!user) return;

    setActiveCategories(updatedCategories)

    const userDocRef = doc(db, "users", user.uid);
    await updateDoc(userDocRef, {
      interests: updatedCategories,
    });
  };

  return { activeCategories, toggleCategory, updateCategories };
}
