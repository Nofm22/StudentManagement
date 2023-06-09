import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./User.module.sass";
import Icon from "../../Icon";

const User = ({ className, role, onToggleModal }) => {
    const [visible, setVisible] = useState(false);

    const handleEdit = () => {
        setVisible(false);
        onToggleModal(true);
    };
    let items = [
        {
            menu: [
                {
                    title: "Edit",
                    edit: true,
                },
                {
                    title: "Log out",
                    url: "/",
                },
            ],
        },
    ];
    if (role && role === "teacher") {
        items = [
            {
                menu: [
                    {
                        title: "Log out",
                        url: "/",
                    },
                ],
            },
        ];
    } else {
    }
    return (
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
            <div
                className={cn(styles.user, className, {
                    [styles.active]: visible,
                })}
            >
                <button
                    className={styles.head}
                    onClick={() => setVisible(!visible)}
                >
                    <img src="/images/content/admin.png" alt="Avatar" />
                </button>
                <div className={styles.body}>
                    {items.map((item, index) => (
                        <div className={styles.menu} key={index}>
                            {item.menu.map((x, index) =>
                                x.url ? (
                                    <NavLink
                                        className={cn(styles.item, {
                                            [styles.color]: x.color,
                                        })}
                                        activeClassName={styles.active}
                                        to={x.url}
                                        onClick={() => setVisible(false)}
                                        key={index}
                                    >
                                        {x.icon && (
                                            <Icon name={x.icon} size="24" />
                                        )}
                                        {x.title}
                                    </NavLink>
                                ) : x.edit ? (
                                    <button
                                        className={styles.item}
                                        onClick={handleEdit}
                                        key={index}
                                    >
                                        {x.title}
                                    </button>
                                ) : (
                                    <button
                                        className={styles.item}
                                        onClick={() => setVisible(false)}
                                        key={index}
                                    >
                                        {x.title}
                                    </button>
                                )
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </OutsideClickHandler>
    );
};

export default User;
