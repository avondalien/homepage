import { type JSX, type PropsWithChildren, useEffect } from "react";

interface FormProps extends PropsWithChildren {
    formId: string
    onSubmit: (event: any) => void
}


function Form({formId, onSubmit: handleSubmit, children}: FormProps): JSX.Element {

    useEffect(() => {
        const form = document.querySelector(`#${formId}`) as HTMLFormElement
        form.addEventListener("submit", handleSubmit)
        // return () => { form.removeEventListener("submit", handleSubmit) }
    }, [])

    return (
        <form id={formId}>
            {children}
        </form>
    )
}

export {Form, type FormProps}