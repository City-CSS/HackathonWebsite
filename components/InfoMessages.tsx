import {Alert} from "@material-tailwind/react"
import React from 'react';
import { CheckLg, ExclamationDiamondFill, ExclamationTriangleFill, InfoCircleFill } from "react-bootstrap-icons";


interface AlertProps {
  message: string;
  className?: string;
}

export const Info: React.FC<AlertProps> = ({ message, className }) => {
  return (
    <Alert color="blue" className={className}>
      <div className="flex items-center">
        <InfoCircleFill className="text-2xl mr-2"/>
        <p className="px-2">{message}</p>
      </div>
    </Alert>
  );
};

export const Warning: React.FC<AlertProps> = ({ message, className }) => {
  return (
    <Alert color="amber" className={className}>
      <div className="flex items-center">
        <ExclamationDiamondFill className="text-2xl mr-2"/>
        <p className="px-2">{message}</p>
      </div>
    </Alert>
  );
};

export const Success: React.FC<AlertProps> = ({ message, className }) => {
  return (
    <Alert color="green" className={className}>
      <div className="flex items-center">
        <CheckLg className="text-2xl mr-2"/>
        <p className="px-2">{message}</p>
      </div>
    </Alert>
  );
};

export const Error: React.FC<AlertProps> = ({ message, className }) => {
  return (
    <Alert color="red" className={className}>
      <div className="flex items-center">
        <ExclamationTriangleFill className="text-2xl mr-2"/>
        <p className="px-2">{message}</p>
      </div>
    </Alert>
  );
};
