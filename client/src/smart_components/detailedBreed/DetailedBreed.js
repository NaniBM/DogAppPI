import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../actions/actions";
import DetailCard from "../../present_component/DetailCard/DetailCard";




export default function DetailContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();

  
  useEffect(() =>
  {loadPage()
  dispatch(getDetail(id))},  []);

  const { detailed } = useSelector((state) => state);
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [loading]);

  const loadPage = () => {
    setLoading(!loading);
    setTimeout(()=>{
      setLoading(!loading); }, 1500)
  }

  return detailed && detailed !== {} ? (
    <DetailCard
      name={detailed.name}
      image={detailed.image}
      temperament={detailed.temperament}
      weight={detailed.weight ? detailed.weight.metric : null}
      height={detailed.height ? detailed.height.metric : null}
      life_span={detailed.life_span}
      loading={loading}
    />
  ) : null;
}
