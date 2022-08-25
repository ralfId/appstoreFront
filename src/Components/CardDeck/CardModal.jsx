import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { useForms } from '../../hooks/useForm';
import { deleteApp, IntallApp } from '../../store/applications/appsThunks';
import { createNewCommentToApp, getCommentPerApp } from '../../store/comments/commentThunks';
import { closeModal, openModal } from '../../store/ui/uiThunks';
import { RatingLayout } from '../layout/RatingLayout';
import Swal from 'sweetalert2'

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
        position: 'relative',
    },
};
Modal.setAppElement('#root');

export const CardModal = () => {

    const dispatch = useDispatch();

    const [selectedItem, setSelectedItem] = useState({});
    const { isModalOpen } = useSelector(state => state.ui);
    const { selectedApp } = useSelector(state => state.applications);
    const { data: CommentsList } = useSelector(state => state.comments);
    const { id, name, developer, score, price, categoryId, description, isInstalled, numberInstallations } = selectedItem;
    const initForm = {
        appId: 0,
        userName: "",
        comment: ""
    }
    const [formValues, handleInputChange, reset] = useForms(initForm);
    const { appId, userName, comment } = formValues;

    useEffect(() => {
        if (selectedApp) {
            setSelectedItem(selectedApp);
        }
        else
            onModalClose();

    }, [selectedApp]);



    const onAfterModalOpen = () => {
    }

    const onModalClose = () => {
        dispatch(closeModal(false));

    }

    const onDeleteApp = () => {
        Swal.fire({
            title: 'Esta seguro de borrar esta app?',
            showDenyButton: true,

            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteApp(id));
                dispatch(closeModal(false));
                Swal.fire('Se a Eliminado!', '', 'success')
            }
        })

    }

    const onCreateComment = (ev) => {
        ev.preventDefault();
        formValues.appId = id;
        if (userName === "" || comment === "" || !userName || !comment && appId > 0) {
            alert('Por favor digite su usuario/comentario')
        }

        dispatch(createNewCommentToApp(formValues));
        reset();
    }

    const onInstallApp = (ev) => {
        ev.preventDefault();
       dispatch(IntallApp(id))
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
                                <div className="d-block">
                                <span className="card-title">{developer}</span>
                                <br/>
                                <quote >Instalaciones {numberInstallations}</quote>
                                </div>
                                
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
                        <form className="mb-5" onSubmit={onCreateComment}>
                            {/* <input type=" number" id="appId"  required name="appId" value={id} hidden/> */}

                            <div className="form-group">
                                <label htmlFor="userNameComment">Nombre de usuario</label>
                                <input type="text" className="form-control" id="userNameComment" placeholder="digite su nombre" required name="userName" value={userName} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="commentContent">comentario</label>
                                <input type="text" className="form-control" id="commentContent" placeholder="Digite su comentario" required name="comment" value={comment} onChange={handleInputChange} />
                            </div>

                            <button type="submit" className="btn btn-primary">Enviar comentario</button>
                        </form>

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

                    <div className="d-flex d-flex align-items-center justify-content-between">
                        <button type="button" className="btn btn-danger ml-2 justify-content-start" onClick={onDeleteApp}>Eliminar</button>
                        <div className="">
                            {
                                (!isInstalled) &&
                                <button type="button" className="btn btn-success ml-2" onClick={onInstallApp}>Instalar</button>
                            }
                            <button type="button" className="btn btn-secondary ml-2" onClick={onModalClose}>Cerrar</button>

                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}
