<form action="resultado.php" method="post">
<fieldset>
<legend>Lista de alunos</legend>
<label for="aluno">Selecione um aluno:
	<select name="aluno" id="aluno">
		<?php
			$total = 10;

			if($total <= 0){
				echo '<option value="Não existem alunos cadastrados.">Não existem alunos cadastrados.</option>';
			}else{
				for($i=0;$i<$total;$i++)
				{
					echo '<option value="'.$i.'">'.$i.'</option>';
				}
			}
        ?>
    </select>
</label>
</fieldset>
<input type="submit" value="Consultar Avaliação">
</form>

resultado.php
<?php
    $id = isset($_POST['aluno']) ? $_POST['aluno'] : '';
    echo $id;
?>