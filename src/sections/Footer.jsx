import React from 'react'

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <div className="social-icon">
                    <a href="https://github.com/anjali-vaish" target="_blank" rel="noopener noreferrer" >
                        <img src="/assets/github.svg" alt="github" className="w-6 h-6"/>
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://x.com/anjalivaishh" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/twitter.svg" alt="twitter" className="w-6 h-6"/>
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/anjali-vaish-225a93244/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/linkedin.svg" alt="linkedin" className="w-6 h-6"/>
                    </a>
                </div>
            </div>

            <p className="text-white-500">© 2024 Anjali. All rights reserved.</p>
        </section>
    )
}
export default Footer
