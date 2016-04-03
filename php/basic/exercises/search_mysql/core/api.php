<?php

include 'db.php';

function search_results($keywords) {
	$returned_results = array();
	$where = "";

	$keywords = preg_split('/[\s]+/', $keywords);
	$total_keywords = count($keywords);

	foreach ($keywords as $key => $keyword) {
		$where .= "nome LIKE '%$keyword%'";
		if ($key != ($total_keywords - 1)) {
			$where .= " AND ";
		}
	}

	$results = "SELECT * FROM alunos WHERE $where";
	$results_num = ($results_num = mysql_query($results)) ? mysql_num_rows($results) : 0;

	if ($results_num === 0) {
		return false;
	} else {

		while ($results_row = mysql_fetch_assoc($results)) {
			$returned_results[] = array(
				'nome'   => $results_row['nome'],
				'ensino' => $results_row['ensino'],
				'serie'  => $results_row['serie'],
				'turma'  => $results_row['turma']
			);

		}

		return $returned_results;
	}
}

?>