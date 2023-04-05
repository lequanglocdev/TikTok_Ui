import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss'
import images from '~/assets/images';

const cx = classNames.bind(styles)
function Header() {
    return( 
    <header className= {cx('wrapper')} >
        <div className={ cx('inner')}>
            <div className={cx('loggo')}>
                <img src={images.logo} alt='TikTok'></img>  
            </div>
            <div className={cx('search')}>
                <input placeholder='Search accounts and videos' spellCheck={false}></input>
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark}/>
                </button>
                <FontAwesomeIcon icon={faSpinner} className={cx('loading')}/>
                
                <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />

                </button>
            </div>
            <div className={cx('actions')}></div>
        </div>      
    </header>
    );
}

export default Header;