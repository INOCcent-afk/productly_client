import React from "react";

export interface ITextAndEvent {
  event: () => void;
  text: string;
  icon?: React.ReactNode;
}
