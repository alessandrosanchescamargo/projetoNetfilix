import React from "react";
import mock from "../../../mock/Lista";
import Index from "./Index";

export default function FlatList(){
    return(
        <>
            <Index {...mock} />
        </>
    )
}