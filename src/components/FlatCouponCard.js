const FlatCouponCard = (props)=>{
    return (
        <div className="border shadow-md p-4 rounded-md mr-2 mt-4 w-48">
            <h2 className="text-sm text-slate-500 font-semibold">{props.flatData.meta}</h2>
        </div>
    );
}

export default FlatCouponCard;