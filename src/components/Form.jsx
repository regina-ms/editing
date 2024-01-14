import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { CHANGE_SERVICE_PRICE, CHANGE_SERVICE_NAME, SAVE_DATA, SAVE_EDITED_DATA, CANCEL_EDIT } from '../redux/actions';

export default function Form() {
    const dispatch = useDispatch();
    const { service, serviceList, editingService } = useSelector((state) => state.reducer);

    const handleClickSave = (e) => {
        e.preventDefault();
        if (editingService) {
            const itemIndexToEdit = serviceList.findIndex(item => item.name === editingService.name && item.price === editingService.price);
            serviceList[itemIndexToEdit] = service
            dispatch({ type: SAVE_EDITED_DATA })
        } else if(service.name && service.price) {
            serviceList.push(service)
            dispatch({ type: SAVE_DATA, payload: serviceList })
        }
    }

    const handleClickCancel = () => {
        dispatch({ type: CANCEL_EDIT })
    }

    return (
        <>
            <form className='d-flex'>
                <input
                    type='text'
                    required
                    value={service.name}
                    onChange={(e) => {
                        dispatch({ type: CHANGE_SERVICE_NAME, payload: e.target.value })
                    }}
                />
                <input
                    type='number'
                    required
                    value={service.price}
                    onChange={(e) => {
                        dispatch({
                            type: CHANGE_SERVICE_PRICE,
                            payload: e.target.value
                        })
                    }}
                />
                <button onClick={handleClickSave}>Save</button>
                {
                    editingService && <button onClick={handleClickCancel}>Cancel</button>
                }
            </form>
        </>
    )
}
