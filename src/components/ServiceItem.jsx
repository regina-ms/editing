import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux'
import { CANCEL_EDIT, CHANGE_SERVICE_NAME, CHANGE_SERVICE_PRICE, DELETE_DATA, EDIT_DATA } from '../redux/actions';
import { changeData } from '../changeData';

export default function ServiceItem({ name, price }) {
  const { serviceList, editingService } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const handleClickEdit = () => {
    dispatch(changeData(CHANGE_SERVICE_NAME, name));
    dispatch(changeData(CHANGE_SERVICE_PRICE, price));
    dispatch({ type: EDIT_DATA })
  }

  const handnleClickDelete = () => {

    const itemIndexToDelete = serviceList.findIndex(item => item.name === name && item.price === price);
    if (
      editingService &&
      serviceList[itemIndexToDelete].name === editingService.name &&
      serviceList[itemIndexToDelete].price === editingService.price
    ) {
      dispatch({ type: CANCEL_EDIT })
    }
    serviceList.splice(itemIndexToDelete, 1);
    dispatch({ type: DELETE_DATA, payload: serviceList })
  }

  return (
    <li className='list-group-item d-flex align-items-center w-100 gap-3'>
      <div className='name'>{name}</div>
      <div className='price'>{price}</div>
      <button className='btn btn-outline-secondary btn-sm' onClick={handleClickEdit}><EditIcon fontSize='small' /></button>
      <button className='btn btn-outline-secondary btn-sm' onClick={handnleClickDelete}><DeleteIcon fontSize='small' /></button>
    </li>
  )
}
