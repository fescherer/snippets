/*

    GRAPH

    - Non linear data structure that consists of a finite number of vertices(node) connected by edges
    - Trees are a specific type of graph data structure
    - Non hierarchical like trees

    - 2 types:
    Directed:
    - Graph in which the edges have a direction
    - Edges are usually represented by arrows pointing in the direction the graph can be traversed

    Undirected:
    - A graph in which the edges are bidirectional
    - The graph can be traversed in either direction
    - The absence of an arrow tells us that the graph is undirected

    matrix = [
        [0,1,0]
        [1,0,1]
        [0,1,0]
    ]

    adjacentList = {
        'A': ['B'],
        'B': ['A','C'],
        'C': ['B']
    }

*/

class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            return
        }
        for(let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex)
        }

        delete this.adjacencyList[vertex]
    }

    hasEdge(vertex1, vertex2) {
        return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
    }

    display() {
        for(let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]])
        }
    }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A','B')
graph.addEdge('B','C')
graph.display()

console.log(graph.hasEdge('A','B'))
console.log(graph.hasEdge('A','C'))

graph.removeEdge('A','B')
graph.display()

console.log(graph.hasEdge('A','C'))

graph.removeVertex('A')
graph.removeVertex('B')
graph.display()