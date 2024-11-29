import { EmptyState } from "@/components/ui/empty-state";
import { Tabs } from "@chakra-ui/react";
import { LuShoppingCart } from "react-icons/lu";

function EmptyContent({ value }: { value: string }) {
  return (
    <Tabs.Content value={value}>
      <EmptyState
        icon={<LuShoppingCart />}
        title="This tab is empty."
        description="Explore the Home instead."
      />
    </Tabs.Content>
  );
}

export default EmptyContent;
