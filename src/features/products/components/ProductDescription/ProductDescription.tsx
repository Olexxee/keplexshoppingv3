import type { ProductDescriptionProps } from "./ProductDescription.types";
import type{ JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";
import {
  Root,
  Title,
  Paragraph,
  Block,
  BlockTitle,
  List,
  ListItem,
} from "./ProductDescription.styles";


export function ProductDescription({
  description,
  className,
}: ProductDescriptionProps) {
  return (
    <Root className={className}>
      <Title>{description.title}</Title>

      {description.description && (
        <Paragraph>{description.description}</Paragraph>
      )}

      {description.highlights.length > 0 && (
        <Block>
          <BlockTitle>Highlights</BlockTitle>

          <List>
            {description.highlights.map((item: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </List>
        </Block>
      )}

      {description.features.length > 0 && (
        <Block>
          <BlockTitle>Features</BlockTitle>

          <List>
            {description.features.map((item: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </List>
        </Block>
      )}
    </Root>
  );
}
