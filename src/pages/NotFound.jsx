import React from 'react';
import Button from '../components/Button';

const NotFound = () => {
    return (
        <main className="not-found">
            
            <svg className="bubble-icon1" width="330" height="306" viewBox="0 0 330 306" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M95.4516 97.5025C37.327 102.46 16.2481 30.2876 12.9742 -6.41807L217.018 -101.24C287.272 -28.7639 414.744 130.848 362.598 189.486C297.417 262.782 242.626 223.184 221.357 169.112C200.088 115.039 168.107 91.3058 95.4516 97.5025Z" fill="#3600AA"/>
                <circle cx="134.364" cy="183.15" r="44.5" transform="rotate(-114.925 134.364 183.15)" fill="#3600AA"/>
            </svg>

            <div className="container not-found__container">
                <h1 className="not-found__title">NÃO TEM NADA POR AQUI</h1>
                <h2 className="not-found__404">
                    404
                </h2>
                <Button
                    goToPage="/"
                    className="not-found__btn"
                    text="Home"
                />
            </div>

            <svg className="bubble-icon2" width="344" height="319" viewBox="0 0 344 319" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M253.752 190.82C311.226 180.832 352.228 362.018 149.909 399.371C-52.4099 436.724 -67.2297 185.335 -20.375 122.39C38.1934 43.7083 96.2167 78.3967 122.102 130.418C147.988 182.439 181.909 203.304 253.752 190.82Z" fill="#3600AA"/>
                <circle cx="214.929" cy="147.394" r="27" transform="rotate(150.092 214.929 147.394)" fill="#3600AA"/>
                <circle cx="163.042" cy="133.402" r="11" transform="rotate(150.092 163.042 133.402)" fill="#3600AA"/>
            </svg>

        </main>
    );
}

export default NotFound;
