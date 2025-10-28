import { useState } from "react";
import type { FooterItemType } from "../types/FooterItemType"
import FooterItem from "./FooterItem";

interface FooterSectionProps {
    data:FooterItemType[];
}

const FooterSection = ({data}:FooterSectionProps) => {

    const [footerData] = useState<FooterItemType[]>(data)
  return (
    <div className="flex justify-around">
        {footerData.map((section , index) => (
            <FooterItem key={index} footer={section}/>
        ))}

    </div>
  )
}

export default FooterSection
