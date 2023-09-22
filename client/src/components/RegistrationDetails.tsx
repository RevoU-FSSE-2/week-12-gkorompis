import dayjs from "dayjs";

interface FormValues {
    fullname: string,
    email: string,
    dob: Date | string,
    streetAddress: string,
    city: string,
    state: string,
    zip: string,
    username: string,
    password: string
}
interface RegistrationDetailsProps {
    formValues: FormValues
}

const RegistrationDetails = ({formValues}:RegistrationDetailsProps) =>{
    let {dob} = formValues;
    const formattedDate = dob ? dayjs(dob).format("DD-MM-YYYY") : "";
    formValues = {...formValues, dob: formattedDate}
    const keys = Object.keys(formValues);
    const values = Object.values(formValues)
    return (
        <>
            {
                dob ?

                <div>
                    <h1>Registration Details</h1>
                    {keys.map((key:string, index) => <p key={index}>{key}: {values[index]}</p>)}
                </div>

                : null
            }
            
        </>
    )
}

export default RegistrationDetails;