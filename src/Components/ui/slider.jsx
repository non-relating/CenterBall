import * as React from "react"
import { cn } from "@/utils/index"

const Slider = React.forwardRef(({ className, value = [0], onValueChange, max = 100, min = 0, step = 1, ...props }, ref) => {
  const handleChange = (event) => {
    const newValue = [parseFloat(event.target.value)];
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <input
      ref={ref}
      type="range"
      value={value[0]}
      onChange={handleChange}
      min={min}
      max={max}
      step={step}
      className={cn(
        "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider",
        className
      )}
      {...props}
    />
  );
})
Slider.displayName = "Slider"

export { Slider }
