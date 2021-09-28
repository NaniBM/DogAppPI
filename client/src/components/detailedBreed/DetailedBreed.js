import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../actions/actions";
import DetailCard from "../../containers/DetailCard/DetailCard";
import "./DetailedBreed.css";

export default function DetailContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => dispatch(getDetail(id)), []);
  console.log(typeof id);

  const { detailed } = useSelector((state) => state);

  return detailed && detailed !== {} ? (
    <DetailCard
      name={detailed.name}
      image={detailed.image}
      temperament={detailed.temperament}
      weight={detailed.weight ? detailed.weight.metric : null}
      height={detailed.height ? detailed.height.metric : null}
      life_span={detailed.life_span}
    />
  ) : null;
}
