import clsx from "clsx";

// Define a type for the props
type ContainerProps = {
    className?: string;
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Container: React.FC<ContainerProps> = ({ className, ...props }) => {
    return <div className={clsx("max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8", className)} {...props} />
}

export default Container;
