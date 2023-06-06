import { NextPage } from "next";

import Heading from "@/ui/Heading";
import Meta from "@/ui/Meta";
import Layout from "@/ui/layout/Layout";

const ThanksPage: NextPage = () => {
    return(
        <Meta title="Thanks">
            <Layout>
                <Heading>Thanks!</Heading>
            </Layout>
        </Meta>
    );
};

export default ThanksPage;