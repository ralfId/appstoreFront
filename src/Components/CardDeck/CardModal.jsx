import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentPerApp } from '../../store/comments/commentThunks';
import { closeModal, openModal } from '../../store/ui/uiThunks';
import { RatingLayout } from '../layout/RatingLayout';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        maxHeight: '100vh',
        overflowY: 'auto',
        zIndex: '1',
        position: 'relative'
    },
};
Modal.setAppElement('#root');

export const CardModal = () => {

    const dispatch = useDispatch();

    const [selectedItem, setSelectedItem] = useState({});
    const { isModalOpen } = useSelector(state => state.ui);
    const { selectedApp } = useSelector(state => state.applications);
    const { data: CommentsList } = useSelector(state => state.comments);
    const { id, name, developer, score, price, categoryId, description, isInstalled } = selectedItem;

    useEffect(() => {
        if (selectedApp) {
            setSelectedItem(selectedApp);
        }
        else
            onModalClose();

    }, [selectedApp]);



    const onAfterModalOpen = () => {
    console.log(isInstalled)

    }

    const onModalClose = () => {
        dispatch(closeModal(false));

    }

    return (
        <>
            <Modal
                isOpen={isModalOpen}
                onAfterOpen={onAfterModalOpen}
                onRequestClose={onModalClose}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="">
                    <img srcSet={`img/app-screenshots/2.webp`} className="card-img-top  px-2 py-2" alt="card icon app" />

                    <div className="card px-3 mt-5 mb-5">
                        <div className="row">
                            <div className="">
                                <img className="" srcSet={`img/app-icons/${id}.webp`} alt="card icon app" />

                            </div>
                            <div className="col-md-8 col-sm-12">
                                <h2 className="card-title mb-0">{name}</h2>
                                <span className="card-title">{developer}</span>
                                <p className="mt-3">{description}</p>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center" >
                        <RatingLayout />
                        <span style={{ fontSize: "2em", marginLeft: "3%" }}>
                            {score}
                        </span>
                    </div>

                    <div className="card mt-5 mb-5 px-4 pt-2">
                        {
                            (CommentsList !== undefined) &&
                            CommentsList.map((comment) => (
                                <div key={comment.id} className="row d-flex ">
                                    <div className="col-md-2 col-sm-2">
                                        <img className="rounded-circle" srcSet={`img/user.webp`} alt="card icon app" />
                                    </div>
                                    <div className="col-md-10 col-sm-10">
                                        <h5><strong>{comment.userName}</strong></h5>
                                        <p className="mt-2">{comment.comment}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="d-flex justify-content-end">
                        {
                            (!isInstalled) &&
                        <button type="button" className="btn btn-success ml-2">Instalar</button>
                        }
                        <button type="button" className="btn btn-secondary" onClick={onModalClose}>Cerrar</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}
