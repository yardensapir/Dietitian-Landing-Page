import Link from "next/link";

type Props = {};

const NotFound = (props: Props) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-4" dir="rtl">
            <h1 className="text-3xl font-bold text-teal-600 mb-3">העמוד לא נמצא</h1>
            <p className="text-charcoal-500 mb-6">מצטערים, העמוד שחיפשת אינו קיים</p>
            <Link href='/' className="px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors">
                חזרה לעמוד הבית
            </Link>
        </div>
    )
};

export default NotFound;