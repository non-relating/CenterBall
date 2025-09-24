import * as React from "react";
import PropTypes from "prop-types";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/index";

const SelectContext = React.createContext();

const Select = ({ children, value, onValueChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(value);

  const handleSelect = (newValue) => {
    setSelectedValue(newValue);
    onValueChange?.(newValue);
    setIsOpen(false);
  };

  return (
    <SelectContext.Provider
      value={{ isOpen, setIsOpen, selectedValue, handleSelect }}
    >
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  );
};

Select.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.any,
  onValueChange: PropTypes.func,
};

const SelectTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { isOpen, setIsOpen } = React.useContext(SelectContext);

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>
    );
  },
);
SelectTrigger.displayName = "SelectTrigger";

SelectTrigger.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const SelectValue = ({ placeholder }) => {
  const { selectedValue } = React.useContext(SelectContext);
  return <span>{selectedValue || placeholder}</span>;
};

SelectValue.propTypes = {
  placeholder: PropTypes.string,
};

const SelectContent = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { isOpen } = React.useContext(SelectContext);

    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "absolute top-full z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
          className,
        )}
        {...props}
      >
        <div className="p-1">{children}</div>
      </div>
    );
  },
);
SelectContent.displayName = "SelectContent";

SelectContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const SelectItem = React.forwardRef(
  ({ className, children, value, ...props }, ref) => {
    const { handleSelect } = React.useContext(SelectContext);

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className,
        )}
        onClick={() => handleSelect(value)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
SelectItem.displayName = "SelectItem";

SelectItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.any.isRequired,
};

const SelectGroup = ({ children }) => <div>{children}</div>;
SelectGroup.propTypes = {
  children: PropTypes.node,
};

const SelectLabel = ({ children, className }) => (
  <div className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}>
    {children}
  </div>
);
SelectLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const SelectSeparator = ({ className }) => (
  <div className={cn("-mx-1 my-1 h-px bg-muted", className)} />
);
SelectSeparator.propTypes = {
  className: PropTypes.string,
};

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
