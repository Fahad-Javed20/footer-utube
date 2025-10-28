import { useState } from "react";
import type { FooterItemType } from "../types/FooterItemType"

interface FooterItemProps{
    footer:FooterItemType;
}

const FooterItem = ({footer}:FooterItemProps) => {

    const [itemFooter] = useState<FooterItemType>(footer)
  return (
    <div className="text-left">
        <h1 className="font-bold">{itemFooter.title}</h1>
        <div className="grid gap-y-2 mt-3">
            {footer.links.map((links,index)=>(
            <a key={index} href="#" className="text-gray-600">
                {links}
            </a>
            )
            
            )}
        </div>
    </div>
  )
}

export default FooterItem
