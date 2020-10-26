import React, { useState } from 'react'
import '../ComponentsCss/CardPageSelector.css'
import CSS from 'csstype';
import { useDispatch } from 'react-redux';
import { changeType } from '../Redux/Reducers/SortReducer';



const style: CSS.Properties = {
    visibility: 'hidden',
}
const selectorStyle: CSS.Properties={

    border:'none',
    background: 'none',
}


export const Selector: React.FC = () => {


    const dispatch = useDispatch();

    
    const [itemsStyle, setStyle] = useState(style)
    const [selectStyle,setSelector]=useState(selectorStyle)
    const [sortType,setSort]=useState('default')

    const openSelector = () => {

        selectStyle.background==='white'?
        setSelector({border:'none',background:'none'}):
        setSelector({border:'2px solid black',background:'white'})

        itemsStyle.visibility === 'hidden' ?
            setStyle({ visibility: 'visible' }) :
            setStyle({ visibility: 'hidden' })

    }

    const changeTypeSel=(type:string)=>{
        setSort(type);
        dispatch(changeType(type))
    }



    return (
        <div className="selector" style={selectStyle}>
            <div onClick={openSelector}>{`сортировка:${sortType}`}<svg id='downArrow' width="10" height="10" viewBox="0 0 107 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M53.2478 81.9994L0.0491136 0.490448L105.703 0.0101188L53.2478 81.9994Z" fill="#616161" />
            </svg></div>
            <div className="items" style={itemsStyle} onClick={()=>{changeTypeSel('default');openSelector()} }>Default</div>
            <div className="items" style={itemsStyle} onClick={()=>{changeTypeSel('Вино');openSelector()}}>Вино</div>
            <div className="items" style={itemsStyle} onClick={()=>{changeTypeSel('Пиво');openSelector()}}>Пиво</div>
            <div className="items" style={itemsStyle} onClick={()=>{changeTypeSel('Водка');openSelector()}}>Водка</div>
            <div className="items" style={itemsStyle} onClick={()=>{changeTypeSel('Коньяк');openSelector()}}>Коньяк</div>
            <div className="items" style={itemsStyle} onClick={()=>{changeTypeSel('Виски');openSelector()}}>Виски</div>
        </div>
    )
}