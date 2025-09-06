interface Props {
    subTitle: string | undefined;
}
const ErrorMessage = ({ subTitle }: Props) => {
    return <p className="error-message">{subTitle}</p>;
};

export default ErrorMessage;
