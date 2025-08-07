import { cn } from "@/lib/utils";


interface ContainerProps{
    children: React.ReactNode;
    clasName?:string
}

export const Container = ({children,clasName}:ContainerProps) => {
  return <div className={cn("container mx-auto px-4 md:px-8 py-4 w-full",clasName)}>{children}</div>;
};
