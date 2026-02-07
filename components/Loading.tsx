'use client'
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const Loading= () => {
    const dotVariants = {
        hidden: { opacity: 0.2, y: 0 },
        visible: { opacity: 1, y: -10 }
    };

    return (
        <AnimatePresence>
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="flex gap-4">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="w-4 h-4 bg-white rounded-full"
                                variants={dotVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.2,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
        </AnimatePresence>
    );
};




export function PageWrapper({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000); 
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loading />;

    return <>{children}</>;
}
