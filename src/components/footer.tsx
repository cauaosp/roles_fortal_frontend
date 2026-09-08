import { Cat } from "../components/icons/cat";

export const Footer = () => {
  return (

    <div className="mx-auto justify-center max-w-350 px-5 py-10 md:px-8 md:py-14 tracking-tight text-muted-foreground flex items-center w-full gap-2 border-t border-border">
      <div>© Desenvolvido por</div>
      <a href="https://github.com/cauaosp" className="group flex items-center gap-2 text-muted-foreground p-2 ring-1 ring-border rounded-sm hover:text-brand-cyan hover:cursor-pointer hover:ring-brand-cyan hover:bg-brand-cyan/5" target="_blank" rel="noreferrer">
        <span className="">Cauã Paiva</span>
        <Cat
          width={20}
          height={20}
          color="currentColor"
          strokeWidth={1.7}
        />
      </a>
    </div>
  );
};
