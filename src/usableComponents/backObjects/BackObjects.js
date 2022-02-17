import React from "react";
import style from "./BackObjects.module.css";

export const BackObjects = ({ moving }) => {
  return (
    <div className={style.objects}>
      <div
        style={{
          transform: ` translate(${
            (moving.clientX - window.innerWidth / 2) / 30
          }px, ${-(moving.clientY - window.innerHeight / 2) / 30}px)`,
        }}
        id="shapes-mask"
        className={style.layer}
      >
        <svg
    
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          style={{ left: "6%", top: "20%",transform: "rotate(15deg)" }}
          width="25px"
          fill="yellow"
          height="25px"
          viewBox="0 0 485.688 485.688"
        >
          <g>
            <g>
              <path
                d="M364.269,453.155H121.416L0,242.844L121.416,32.533h242.853l121.419,210.312L364.269,453.155z M131.905,434.997h221.878
			l110.939-192.152L353.783,50.691H131.905L20.966,242.844L131.905,434.997z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
        </svg>
        
      </div>
    </div>
  );
};
