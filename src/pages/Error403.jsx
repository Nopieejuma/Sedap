import ErrorPage from "../components/ErrorPage"

export default function Error403() {
    return(
       <div>
          <ErrorPage
          code={403}
          description={"There is nothing here! Please back to homepage!!!"}
          image={"https://image.shutterstock.com/image-illustration/http-error-403-forbidden-3d-260nw-2193985201.jpg"}
          />
       </div>
    )
   }