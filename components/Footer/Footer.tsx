import Icon from "../UI/Icon/Icon";

const Footer = () => {


    return (
        <footer className={"h-[60vh] mt-2"}>
            <div className={"border-top"}></div>
            <div className={"grid"}>
                <h2>We are at the end!</h2>
                {/* @ts-expect-error Server Component */}
                <Icon name="switch_access_shortcut" />
            </div>
            <div className={"border-bottom"}>
            </div>
        </footer>
    )
}

export default Footer;