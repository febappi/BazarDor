import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-6 border-t border-gray-200 bg-white px-6 py-6">
            <div className="max-w-6xl mx-auto flex flex-row items-center justify-between gap-4">
                 <div className="text-sm font-bold text-center">
                    <p>
                        বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
                    </p>
                </div>
                <div className="text-sm font-bold text-center">
                    <p>
                        সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;