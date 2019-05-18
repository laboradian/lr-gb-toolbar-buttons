( function( wp ) {
	var withSelect = wp.data.withSelect;
	var ifCondition = wp.compose.ifCondition;
	var compose = wp.compose.compose;
	var MyCustomButton = function( props ) {
		return wp.element.createElement(
			wp.editor.RichTextToolbarButton, {
				icon: 'editor-code',
				title: 'Sample output',
				onClick: function() {
					props.onChange( wp.richText.toggleFormat(
						props.value,
						{ type: 'lr-gb-toolbar-buttons/sample-output' }
					) );
				},
				isActive: props.isActive,
			}
		);
	}

	// ボタンを表示するブロックタイプを限定する
	var ConditionalButton = compose(
		withSelect( function( select ) {
			return {
				selectedBlock: select( 'core/editor' ).getSelectedBlock()
			}
		} ),
		ifCondition( function( props ) {
			return (
				props.selectedBlock &&
				props.selectedBlock.name === 'core/paragraph'
			);
		} )
	)( MyCustomButton );

	wp.richText.registerFormatType(
		'lr-gb-toolbar-buttons/sample-output', {
			title: 'Sample output',
			tagName: 'samp',
			//className: null,
			className: 'foo',
			edit: ConditionalButton,
		}
	);
} )( window.wp );

