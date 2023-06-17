import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {
    const handleSubmit = () => {
        alert("form Data");
        setIsOpen(false);
    };
    const changeAvatarHandler = () => {
        var selectedFile = document.getElementById("avatarInput").files[0];
        var img = document.getElementById("avatarImg");

        var reader = new FileReader();
        reader.onload = function () {
            img.src = this.result;
        };
        reader.readAsDataURL(selectedFile);
    };
    return (
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h5 className={styles.heading}>Edit</h5>
                    </div>
                    <button
                        className={styles.closeBtn}
                        onClick={() => setIsOpen(false)}
                    >
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <form>
                        <div className={styles.modalContent}>
                            <div className={styles.formItem}>
                                <label htmlFor="nameInput">Name</label>
                                <input
                                    id="nameInput"
                                    placeholder="Type your new Name"
                                />
                            </div>
                            <div className={styles.formItem}>
                                <div className={styles.avatarLabel}>
                                    <label htmlFor="avatarInput" type="file">
                                        Avatar
                                    </label>
                                    <div className={styles.avatarImage}>
                                        <img id="avatarImg" />
                                    </div>
                                </div>
                                <input
                                    id="avatarInput"
                                    type="file"
                                    onChange={changeAvatarHandler}
                                />
                            </div>
                        </div>
                        <div className={styles.modalActions}>
                            <div className={styles.actionsContainer}>
                                <button
                                    type="button"
                                    className={styles.deleteBtn}
                                    onClick={handleSubmit}
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className={styles.cancelBtn}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Modal;
