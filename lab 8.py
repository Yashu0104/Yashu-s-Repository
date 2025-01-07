from collections import defaultdict, deque

class MultiGraph:
    def __init__(self):
        self.graph = defaultdict(list)

    def add_edge(self, from_node, to_node, label):
        self.graph[from_node].append((to_node, label))

    def has_path(self, start_node, end_node):
        visited = set()
        queue = deque([start_node])

        while queue:
            current = queue.popleft()
            if current == end_node:
                return True
            if current not in visited:
                visited.add(current)
                queue.extend([neighbor for neighbor, label in self.graph[current]])

        return False

# Create the multigraph
multigraph = MultiGraph()

# Add the edge based on the identified relationship
multigraph.add_edge("cat", "mouse", "chased")

# Example of checking for a path
print(multigraph.has_path("cat", "mouse"))  # Should return True
print(multigraph.has_path("mouse", "cat"))  # Should return False