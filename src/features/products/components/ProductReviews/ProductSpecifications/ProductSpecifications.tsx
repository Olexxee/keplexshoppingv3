import {
  Root,
  Group,
  GroupTitle,
  Table,
  Row,
  Label,
  Value,
} from "./ProductSpecifications.styles";

import type { ProductSpecificationsProps } from "./ProductSpecifications.types";

export function ProductSpecifications({
  specifications,
  className,
}: ProductSpecificationsProps) {
  if (!specifications.groups.length) {
    return null;
  }

  return (
    <Root className={className}>
      {specifications.groups.map((group) => (
        <Group key={group.title}>
          <GroupTitle>{group.title}</GroupTitle>

          <Table>
            {group.items.map((item) => (
              <Row key={item.label}>
                <Label>{item.label}</Label>

                <Value>{item.value}</Value>
              </Row>
            ))}
          </Table>
        </Group>
      ))}
    </Root>
  );
}
