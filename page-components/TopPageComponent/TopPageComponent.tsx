import { TopPageComponentProps } from "./TopPageComponent.props";
import { ProductModel } from "@/interfaces/product.interface";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    return (
        <>
            {products && (products as ProductModel[]).length}
        </>
    )
}