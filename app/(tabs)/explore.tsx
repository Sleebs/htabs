import LibrarySearchContainer from "@/components/LibrarySearch/LibrarySearchContainer";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
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
      <LibrarySearchContainer />
    </ThemedView>
  );
}
