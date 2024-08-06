Feature: Lista de Tareas
  Como usuario, quiero poder agregar, completar y eliminar tareas para organizar mis actividades.

  Scenario: Agregar una nueva tarea
    Given que estoy en la página de la lista de tareas
    When agrego una nueva tarea con el título "Estudiar BDD"
    Then debería ver la tarea "Estudiar BDD" en la lista

  Scenario: Completar una tarea
    Given que tengo una tarea "Estudiar BDD" en la lista
    When marco la tarea "Estudiar BDD" como completada
    Then la tarea "Estudiar BDD" debería estar marcada como completada
