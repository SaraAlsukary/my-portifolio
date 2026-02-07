import { Github, Linkedin, MessageCircle, Send } from 'lucide-react'
import Link from 'next/link'

const SocialMedia = ({ className, size = 30 }: { className?: string, size?: number }) => {
    return (
        <div className={`flex justify-center gap-7 ${className}`}>
            <Link
                target="_blank"
                href={'https://www.linkedin.com/in/sara-al-sukary-0ab7b62a1/'}>
                <Linkedin size={size} className="transition-all duration-500 hover:text-(--primary-color)!" />
            </Link>
            <Link
                target="_blank"
                href={'https://github.com/SaraAlsukary/'}>
                <Github size={size} className="transition-all duration-500 hover:text-(--primary-color)!" />
            </Link>
            <Link
                href={'https://t.me/SaraAlsukary'}>
                <Send size={size} className="transition-all duration-500 hover:text-(--primary-color)!" />
            </Link>
            <Link
                target="_blank"
                href={'https://wa.me/963980860927'}>
                <MessageCircle size={size} className="transition-all duration-500 hover:text-(--primary-color)!" />
            </Link>
        </div>
    )
}

export default SocialMedia