
import { useEffect } from "react";
import UnderConstructionComponent from "@/components/UnderConstruction";

interface UnderConstructionPageProps {
  pageName?: string;
  estimatedCompletion?: string;
}

const UnderConstructionPage = ({
  pageName = "This Page",
  estimatedCompletion = "soon",
}: UnderConstructionPageProps) => {
  useEffect(() => {
    document.title = `${pageName} - Under Construction | Hope Adoptions`;
  }, [pageName]);

  return <UnderConstructionComponent pageName={pageName} estimatedCompletion={estimatedCompletion} />;
};

export default UnderConstructionPage;
