import { ThemedView } from "@/components/ThemedView";
import NewsCollapsibleContainer from "@/components/news/NewsCollapsableContainer";
import LastViewedContainer from "@/components/lastViewed/LastViewedContainer";

export default function Homebase() {
  return (
    <ThemedView
      style={{
        minHeight: "100%",
        width: "100%",
        alignItems: "center",
        gap: 32,
        paddingTop: 25,
      }}
    >
      <NewsCollapsibleContainer />
      <LastViewedContainer />
    </ThemedView>
  );
}
