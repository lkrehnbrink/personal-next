import Image from "next/image"
import Counter from "./counter"

import githubIcon from 'bootstrap-icons/icons/github.svg';
import linkedInIcon from 'bootstrap-icons/icons/linkedin.svg';

export default function Header() {
    const iconSize = 24;

    const navStyle: any = {
        display: 'flex', 
        margin: '1rem auto', 
        justifyContent: 'center', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '1rem'
    };

    return (
        <header>
            <nav style={navStyle}>
                <Image src='/lew@2x.jpeg' alt='Lew Avatar' width='60' height='60' style={{borderRadius: '50%', flexShrink: 0}}></Image>
                <div style={{textAlign: 'center'}}>
                    <h1 style={{margin: '0 0 .5rem', fontSize: '3rem'}}>Lew Krehnbrink</h1>
                    <p><u>Front-end Web Dev</u><br/>with<br/><Counter startTime='2015-05-01T08:00:00-05:00'/><br/>of full stack web development experience.<br/>Located in Chicago, IL.</p>
                    <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
                        <a href="https://www.linkedin.com/in/lew-krehnbrink-6184a239" target="_blank" title='Lew on linkedIn' rel="noreferrer">
                            <Image alt='LinkedIn Logo' {...linkedInIcon} width={iconSize} height={iconSize}/>
                        </a>
                        <a href="https://github.com/lkrehnbrink" target="_blank" title='Lew on github' rel="noreferrer">
                            <Image alt='Github Logo' {...githubIcon} width={iconSize} height={iconSize}/>
                        </a>
                    </div>
                </div>
            </nav>
      </header>
    );
}