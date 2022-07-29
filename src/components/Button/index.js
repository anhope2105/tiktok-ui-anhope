import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    href,
    primary = false,
    outline = false,
    disabled = false,
    text = false,
    small = false,
    large = false,
    to,
    children,
    link,
    rounded,
    onClick,
    className,
    lefticon,
    righticon,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        disabled,
        text,
        rounded,
    });

    return (
        <Comp className={classes} {...props}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span className={cx('title')}> {children}</span>
            {righticon && <span className={cx('icon')}>{righticon}</span>}
        </Comp>
    );
}

export default Button;
