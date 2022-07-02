import "./index.css";

import React from "react";
import { createRoot } from "react-dom/client";
import OneOfObjectForm from "./OneOfObjectForm";
import OneOfObjectArrayForm from "./OneOfObjectArrayForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ExampleForm } from "./ExampleForm";
import { CustomInputsForm } from "./CustomInput";
import { FieldForm } from "./Fieldform";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/object-types" element={<OneOfObjectForm />} />
                <Route path="/object-types-array" element={<OneOfObjectArrayForm />} />
                <Route path="/custom-inputs" element={<CustomInputsForm />} />
                <Route path="/field" element={<FieldForm />} />
                <Route path="/" element={<ExampleForm />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = createRoot(document.getElementById("root")!);

root.render(<Router />);
