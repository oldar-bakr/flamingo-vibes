import React from "react";

interface Props {
  children: string;
}

function Alert({ children }: Props) {
  return <div className="alert alert-primery alert-dissmisable">children</div>;
}

export default Alert;
